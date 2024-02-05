"use client";

import { useRef, useState } from "react";
import FormControls from "../form-controls";
import { PhotoCard } from "./photocard";
import ButtonSubmit from "./buttonsubmit";
import { uploadPhoto } from "@/services/photoupload";

const controls = [
  {
    name: "aboutme",
    placeholder: "About Me",
    type: "text",
    label: "About Me",
  },
  {
    name: "noofprojects",
    placeholder: "No of projects",
    type: "text",
    label: "Enter no of projects",
  },
  {
    name: "yearofexperience",
    placeholder: "No of experience",
    type: "text",
    label: "Enter no of experience",
  },
  {
    name: "noofclients",
    placeholder: "No of clients",
    type: "text",
    label: "Enter no of clients",
  },
  {
    name: "skills",
    placeholder: "skills",
    type: "text",
    label: "Skills",
  },
];
export default function AdminAboutView({
  formData,
  setFormData,
  handleSaveData,
}) {
  const [files, setFiles] = useState([]);
  const formRef = useRef();

  async function handleInputFiles(e) {
    const files = e.target.files;

    const newFiles = [...files].filter((file) => {
      if (file.size < 1024 * 1024 && file.type.startsWith("image/")) {
        return file;
      }
    });

    setFiles((prev) => [...newFiles, ...prev]);
    formRef.current.reset();
  }

  async function handleDeleteFile(index) {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  }

  async function handleUpload() {
    if (!files.length) return alert("No images uploaded");
    if (files.length > 3) return alert("Please only 3 images at a time");

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    const res = await uploadPhoto(formData);
  }

  return (
    <div className="w-full">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleInputFiles}
        />

        <form action={handleUpload} ref={formRef}>
          <div className="flex gap-y-10 flex-wrap m-10">
            {files.map((file, index) => (
              <PhotoCard
                key={index}
                url={URL.createObjectURL(file)}
                onClick={() => handleDeleteFile(index)}
              />
            ))}
          </div>
          <ButtonSubmit value="Update Icons" />
          <button
            onClick={() => handleSaveData("about")}
            className="mt-[10px] border border-red-main p-4 font-bold text-[16px]"
          >
            Add Info
          </button>
        </form>
      </div>
    </div>
  );
}
