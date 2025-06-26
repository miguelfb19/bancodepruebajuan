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
        noHeader
        open={openModal}
        onSlAfterHide={() => setOpenModal(false)}
        style={{ "--width": "50rem" } as React.CSSProperties}
      >
        <h3 className="font-bold text-2xl mb-5 text-center">{name}</h3>
        <div className="h-96 w-full rounded-xl mb-5">
          <img
            src={picture || "/portadaMobile.avif"}
            alt={`imagen de servicio ${name}`}
            loading="lazy"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
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
        className="flex flex-col justify-between pb-5 gap-5 rounded-2xl bg-gradient-to-bl from-30% from-slate-200 via-70% via-white to-tertiary/40 text-primary shadow-lg shadow-tertiary cursor-pointer hover:scale-[102%] hover:shadow-xl transition-all duration-300"
        onClick={() => setOpenModal(true)}
      >
        <div className="flex flex-col gap-3 overflow-hidden">
          <img
            src={picture || "/portadaMobile.avif"}
            alt={`imagen de servicio ${name}`}
            loading="lazy"
            className="max-w-full h-48 object-cover rounded-t-xl"
          />

          <p className="mx-3 text-center whitespace-pre-line text-2xl font-semibold text-primary">
            {name}
          </p>
          <p className="mx-3 text-center whitespace-pre-line text-sm text-primary">
            {text}
          </p>
        </div>
        <CustomButton
          text="Detalles"
          action={() => setOpenModal(true)}
          className="mx-3"
        />
      </div>
    </>
  );
};
