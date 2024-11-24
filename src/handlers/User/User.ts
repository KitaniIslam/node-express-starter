import { Request, Response } from "express";
import { IAddUser, IUser } from "@/types/User.t.js";
import { TResponse } from "@/types/index.js";

export const getUsers = (
  request: Request<{}, {}, IAddUser>,
  response: Response<TResponse<IUser[]>>
) => {
  try {
    return response.status(201).send({
      data: [
        {
          createdAt: new Date(),
          role: "",
          username: "@fake_username",
          name: "",
          updatedAt: new Date(),
        },
        {
          createdAt: new Date(),
          role: "",
          username: "@fake_username_2",
          name: "",
          updatedAt: new Date(),
        },
      ],
      error: null,
      success: true,
    });
  } catch (error) {
    return response.status(500).send({
      data: null,
      error: "Internal Server Error",
      success: false,
    });
  }
};

export const getUserById = (
  request: Request,
  response: Response<TResponse<IUser>>
) => {
  try {
    return response.status(201).send({
      data: {
        createdAt: new Date(),
        role: "",
        username: "@fake_username",
        name: "",
        updatedAt: new Date(),
      },
      error: null,
      success: true,
    });
  } catch (error) {
    return response.status(500).send({
      data: null,
      error: "Internal Server Error",
      success: false,
    });
  }
};

export const addUser = (
  request: Request<{}, {}, IAddUser>,
  response: Response<TResponse<IUser>>
) => {
  try {
    return response.status(201).send({
      data: {
        createdAt: new Date(),
        role: "",
        username: "@fake_username",
        name: "",
        updatedAt: new Date(),
      },
      error: null,
      success: true,
    });
  } catch (error) {
    return response.status(500).send({
      data: null,
      error: "Internal Server Error",
      success: false,
    });
  }
};
