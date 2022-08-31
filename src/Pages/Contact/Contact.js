import React from "react";
import { useForm } from "react-hook-form";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import location from "../../images/location.svg";
import L from "leaflet";
import "./contact.scss";

function Contact() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  const position = [42.87965145582351, 74.61277683719962];

  const icon = L.icon({
    iconUrl: location,
    iconAnchor: position,
    iconSize: [55, 55],
  });

  //42.87965145582351, 74.61277683719962
  return (
    <section className="contact">
      <h1> Our Contact</h1>
      <div className="container contact__container">
        <div className="contact__col">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              Your Name
              <input
                placeholder="Aktilek"
                {...register("name", {
                  required: "Имя должно быть заполненно",
                  minLength: {
                    value: 3,
                    message: "Минимум 3 слово!",
                  },
                })}
              />
            </label>
            <div className="contact__error">
              {errors?.name && <p>{errors?.name?.message || "Error!"}</p>}
            </div>
            <label>
              Your Email
              <input
                placeholder="aktilek@company.com"
                {...register("email", {
                  required: "Email должно быть заполненно!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
                    message: "Введите правидьный Email!",
                  },
                })}
              />
            </label>
            <div className="contact__error">
              {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
            </div>
            <label>
              Your Messge
              <textarea
                {...register("msg", {
                  maxLength: {
                    value: 10,
                    message: "Max 10 symbol",
                  },
                })}
              ></textarea>
            </label>
            <div className="contact__error">
              {errors?.msg && <p>{errors?.msg?.message || "Error!"}</p>}
            </div>
            <input type="submit" disabled={!isValid} />
          </form>
        </div>

        <div className="contact__col">
          <MapContainer center={position} zoom={20}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position} icon={icon}>
              <Popup>Hayat Regency</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
}

export default Contact;
