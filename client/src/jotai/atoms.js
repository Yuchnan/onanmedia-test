import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const categoryAtom = atomWithStorage("tips", "bisnis", "desain", "teknologi", "medsos", "dm", "penulisan", "gaya")

export const isOpenModalAtom = atom(false)