"use server";
import path from "path";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import os from "os";

async function savePhotosToLocal(formData) {
  const files = formData.getAll("files");
  const multipleBuffersPromise = files.map((file) =>
    file.arrayBuffer().then((data) => {
      const buffer = Buffer.from(data);
      const name = uuidv4();
      const ext = file.type.split("/")[1];

      console.log({ name, ext });

      const uploadDir = path.join(process.cwd(), "public", `/${name}.${ext}`);
      console.log(uploadDir);
      fs.writeFile(uploadDir, buffer);
    })
  );
}
export async function uploadPhoto(formData) {
  try {
    const newFiles = await savePhotosToLocal(formData);
  } catch (error) {
    return { errMsg: error.message };
  }
}
