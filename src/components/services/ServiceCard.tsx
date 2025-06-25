import SlDialog from "@shoelace-style/shoelace/dist/react/dialog/index.js";
import type { Service } from "../../interfaces/Service";
import { useState } from "react";
import { CustomButton } from "../ui/CustomButton";

interface Props {
  service: Service;
}

export const ServiceCard = ({ service }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const { name, text, content, picture } = service;
  return (
    <>
      <SlDialog
        id="dialog"
        label={name}
        open={openModal}
        onSlAfterHide={() => setOpenModal(false)}
      >
        <div className="flex flex-col gap-10">
          {content}
          <CustomButton
            text="Cerrar"
            variant="btn-2"
            action={() => setOpenModal(false)}
            className="self-center"
          />
        </div>
      </SlDialog>

      {/* CARD */}
      <div
        id="card"
        className="flex flex-col justify-between pb-5 gap-5 rounded-2xl border-2 border-primary shadow-lg shadow-tertiary cursor-pointer hover:scale-[102%] hover:shadow-xl transition-all duration-300"
        onClick={() => setOpenModal(true)}
      >
        <div className="max-h-48 overflow-hidden rounded-t-xl">
          <img
            src={picture || "/portadaMobile.avif"}
            alt={`imagen de servicio ${name}`}
            loading="lazy"
            className="w-full h-full object-fill"
          />
        </div>
        <p className="mx-3 text-center whitespace-pre-line text-2xl font-semibold text-primary">{name}</p>
        <CustomButton
          text="Detalles"
          action={() => setOpenModal(true)}
          className="mx-3"
        />
      </div>
    </>
  );
};
