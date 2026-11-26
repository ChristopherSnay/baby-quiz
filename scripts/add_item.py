#!/usr/bin/env python3
"""Tiny Tkinter editor for adding items to a quiz category.

Run from anywhere with:
    python scripts/add_item.py

It reads public/categories.json for the dropdown and saves items to
public/categories/<file> from the selected category.
"""

import json
import shutil
from pathlib import Path
from tkinter import StringVar, Tk, messagebox
from tkinter import ttk
from tkinter.colorchooser import askcolor
from tkinter.filedialog import askopenfilename

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
CATEGORIES_JSON = PUBLIC / "categories.json"
CATEGORY_DIR = PUBLIC / "categories"
IMAGES_DIR = PUBLIC / "images"
SOUNDS_DIR = PUBLIC / "sounds"

PREFERRED_FIELDS = ("name", "image", "colorHex", "colorCode", "sound")
FILE_TYPES = [("Images and audio", "*.png *.jpg *.jpeg *.gif *.svg *.webp *.mp3 *.wav *.ogg")]

categories = []
items = []
fields = []
selected_path = None
entries = {}

category_combo = None
form_frame = None
tree = None
status_var = None
id_var = None


def read_json(path):
    with path.open(encoding="utf-8") as file:
        return json.load(file)


def write_json(path, data):
    with path.open("w", encoding="utf-8") as file:
        json.dump(data, file, indent=2)
        file.write("\n")


def get_fields(rows):
    if not rows:
        return ["name", "image", "sound"]

    result = [key for key in PREFERRED_FIELDS if any(key in row for row in rows)]
    for row in rows:
        for key in row:
            if key != "id" and key not in result:
                result.append(key)

    if "name" not in result:
        result.insert(0, "name")
    if "sound" not in result:
        result.append("sound")
    return result


def get_next_id(rows):
    return max((int(row.get("id", 0)) for row in rows), default=0) + 1


def rebuild_table():
    columns = ["id", *fields]
    tree.configure(columns=columns)
    tree.column("id", width=60, anchor="w", stretch=False)

    for column in columns:
        tree.heading(column, text=column)
        if column != "id":
            tree.column(column, width=110, anchor="w", stretch=True)

    for child in tree.get_children():
        tree.delete(child)

    for row in items:
        tree.insert("", "end", values=[row.get(column, "") for column in columns])


def browse_asset(field, directory):
    initial_dir = str(directory) if directory.exists() else None
    filename = askopenfilename(initialdir=initial_dir, filetypes=FILE_TYPES)
    if not filename:
        return

    source = Path(filename)
    if source.parent.resolve() != directory.resolve():
        directory.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, directory / source.name)
        status_var.set(f"Copied {source.name} into {directory.relative_to(ROOT)}")

    entry = entries[field]
    entry.delete(0, "end")
    entry.insert(0, source.name)


def pick_color(field):
    _, hex_color = askcolor(color=entries[field].get() or "#ffffff")
    if hex_color:
        entries[field].delete(0, "end")
        entries[field].insert(0, hex_color)


def rebuild_form():
    global id_var

    for widget in form_frame.winfo_children():
        widget.destroy()
    entries.clear()

    id_var = StringVar(value=str(get_next_id(items)))
    ttk.Label(form_frame, text="ID").grid(row=0, column=0, sticky="w", padx=4, pady=2)
    ttk.Entry(form_frame, textvariable=id_var, state="readonly", width=8).grid(
        row=0, column=1, sticky="w", padx=4, pady=2
    )

    for row_index, field in enumerate(fields, start=1):
        ttk.Label(form_frame, text=field).grid(
            row=row_index, column=0, sticky="w", padx=4, pady=2
        )
        entry = ttk.Entry(form_frame, width=28)
        entry.grid(row=row_index, column=1, sticky="w", padx=4, pady=2)
        entries[field] = entry

        if field in ("image", "sound"):
            directory = IMAGES_DIR if field == "image" else SOUNDS_DIR
            ttk.Button(
                form_frame,
                text="Browse...",
                command=lambda f=field, d=directory: browse_asset(f, d),
            ).grid(row=row_index, column=2, sticky="w", padx=4, pady=2)
        elif field == "colorHex":
            ttk.Button(
                form_frame,
                text="Pick...",
                command=lambda f=field: pick_color(f),
            ).grid(row=row_index, column=2, sticky="w", padx=4, pady=2)


def load_category(category_name):
    global items, fields, selected_path

    category = next((item for item in categories if item["name"] == category_name), None)
    if category is None:
        return

    selected_path = CATEGORY_DIR / category["file"]
    if not selected_path.exists():
        messagebox.showerror("Missing file", f"Could not find {selected_path}")
        items = []
        fields = []
    else:
        loaded = read_json(selected_path)
        items = loaded if isinstance(loaded, list) else []
        fields = get_fields(items)
        status_var.set(f"Loaded {len(items)} item(s) from {selected_path.name}")

    rebuild_table()
    rebuild_form()


def add_item():
    try:
        item_id = int(id_var.get())
    except ValueError:
        messagebox.showerror("Invalid ID", "The ID must be a number.")
        return

    if selected_path is None:
        messagebox.showwarning("No category", "Choose a category first.")
        return

    if any(row.get("id") == item_id for row in items):
        messagebox.showerror("Duplicate ID", f"An item with ID {item_id} already exists.")
        return

    new_item = {"id": item_id}
    for field in fields:
        value = entries[field].get().strip()
        if value:
            new_item[field] = value

    if not new_item.get("name"):
        messagebox.showerror("Missing name", "Please enter a name for the new item.")
        return
    if "image" in fields and "colorHex" not in fields and not new_item.get("image"):
        messagebox.showerror("Missing image", "Please choose an image for the new item.")
        return
    if "colorHex" in fields and not new_item.get("colorHex"):
        messagebox.showerror("Missing color", "Please pick a color for the new item.")
        return

    items.append(new_item)
    write_json(selected_path, items)
    load_category(category_combo.get())
    status_var.set(f'Added "{new_item["name"]}" to {selected_path.name}')


def main():
    global categories, category_combo, form_frame, tree, status_var

    root = Tk()
    root.title("Quiz Item Editor")
    root.geometry("680x560")

    try:
        categories = read_json(CATEGORIES_JSON)
    except (OSError, json.JSONDecodeError) as error:
        messagebox.showerror("Error", f"Could not load categories.json:\n{error}")
        root.destroy()
        return

    top = ttk.Frame(root, padding=8)
    top.pack(fill="x")

    ttk.Label(top, text="Category:").pack(side="left")
    category_combo = ttk.Combobox(
        top,
        state="readonly",
        values=[category["name"] for category in categories],
        width=24,
    )
    category_combo.pack(side="left", padx=6)
    category_combo.bind(
        "<<ComboboxSelected>>", lambda _event: load_category(category_combo.get())
    )

    table_frame = ttk.Frame(root, padding=(8, 0, 8, 4))
    table_frame.pack(fill="both", expand=True)

    tree = ttk.Treeview(table_frame, show="headings", height=12)
    scrollbar = ttk.Scrollbar(table_frame, orient="vertical", command=tree.yview)
    tree.configure(yscrollcommand=scrollbar.set)
    tree.pack(side="left", fill="both", expand=True)
    scrollbar.pack(side="right", fill="y")

    form_frame = ttk.LabelFrame(root, text="New item", padding=8)
    form_frame.pack(fill="x", padx=8, pady=4)

    button_frame = ttk.Frame(root, padding=(8, 0, 8, 8))
    button_frame.pack(fill="x")

    ttk.Button(button_frame, text="Add item", command=add_item).pack(side="left")
    status_var = StringVar(value="")
    ttk.Label(button_frame, textvariable=status_var).pack(side="left", padx=10)

    if categories:
        category_combo.current(0)
        load_category(categories[0]["name"])

    root.mainloop()


if __name__ == "__main__":
    main()
