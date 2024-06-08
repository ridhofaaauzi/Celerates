import { getAllUsers } from "../models/userModel.js"; // pastikan menggunakan jalur relatif dan menyertakan ekstensi .js

export const getUsers = (req, res) => {
  getAllUsers((error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(results);
  });
};
