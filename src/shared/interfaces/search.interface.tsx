import { SyntheticEvent } from "react";
import { defaultStyleComponentInterface } from "./styledComponents.interface";

export interface SearchInterface {
  submit: (event: SyntheticEvent) => void
  value: string;
  change: (event: React.ChangeEvent<HTMLInputElement>) => void
  showResult: boolean | null;
};

export interface SearchBarInterface extends defaultStyleComponentInterface {
  showResult: boolean | null;
  onSubmit: (event: React.ChangeEvent<HTMLInputElement>) => void
};

export interface SearchInputInterface {
  type: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

export interface SearchIconInterface extends defaultStyleComponentInterface {
  showResult: boolean | null;
};