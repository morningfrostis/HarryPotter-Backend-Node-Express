import { request, response } from "express";

const db = require("../models");
const Characters = db.data;

export const getCharacters = async () => {
  const result = await Characters.findAll(request.body);
  return result;
};

export const getCharactersById = async (id) => {
  const result = await Characters.findByPk(id);
  return result;
};

export const createCharacters = async ({
  idNasa,
  camera,
  img_src,
  earth_date,
}) => {
  const result = await Characters.create({
    idNasa,
    camera,
    img_src,
    earth_date,
  });
  return result;
};

export const updateCharacters = async (id, data) => {
  const result = await Characters.update(
    data,
    {
      where: {
        id: id,
      },
    },
    { new: true }
  );
  if (!result) {
    throw new Error("No se encuentra el personaje a actualizar");
  }
  return result;
};

export const removeCharacters = async (id) => {
  await Characters.destroy({
    where: {
      id,
    },
  });
  return true;
};
