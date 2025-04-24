import query from "../db/utils.js";

export const findAll = async () => {
    return await query("SELECT * FROM factorio");
};
export const findOne = async (id) => {
    return await query("SELECT * FROM factorio WHERE id = ?", [id]);
};
export const AddOne = async (factorio, requesttype) => {
    if (factorio.items) {
        return await query(
            "INSERT INTO factorio (items, requesttype) VALUES (?, ?)",
            [factorio.items, requesttype]
        );
    }
    if (factorio.fluids) {
        return await query(
            "INSERT INTO factorio (fluids, requesttype) VALUES (?, ?)",
            [factorio.fluids, requesttype]
        );
    }
    if (factorio.enemies) {
        return await query(
            "INSERT INTO factorio (enemies, requesttype) VALUES (?, ?)",
            [factorio.enemies, requesttype]
        );
    }
    if (factorio.terrains) {
        return await query(
            "INSERT INTO factorio (terrains, requesttype) VALUES (?, ?)",
            [factorio.terrains, requesttype]
        );
    }
};
export const updateOne = async (factorio, id) => {
    const result = await query("UPDATE factorio SET ? WHERE id = ?", [
        factorio,
        id,
    ]);
    return { message: "Update successful" };
};

export const removeOne = async (id) => {
    return await query("DELETE FROM factorio WHERE id = ?", [id]);
};
