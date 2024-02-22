"use client";
import { useEffect, useState } from "react";
import css from "./spinnyThing.module.scss";

export const SpinnyThing = ({
  text,
  radius = 150,
}: {
  text: string;
  radius?: number;
}) => {
  const characters = text.split("");
  const diameter = radius * 2;

  const degreeToRadian = (angle: number) => {
    return angle * (Math.PI / 180);
  };

  const deltaAngle = 360 / characters.length;
  const characterOffsetAngle = 8;
  let currentAngle = -90;

  return (
    <>
      {characters.map((i, index) => {
        const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
        const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));
        const transform = `translate(${xPos}px, ${yPos}px)`;
        const rotate = `rotate(${(index * deltaAngle) + characterOffsetAngle}deg)`;
        currentAngle += deltaAngle;
        return (
          <div
            id={css.spinny}
            style={{
              width: `${diameter}px`,
              height: `${diameter}px`,
            }}
          >
            <span style={{
              transform:`${transform} ${rotate}`
            }} key={index}>{i}</span>
          </div>
        );
      })}
    </>
  );
};
