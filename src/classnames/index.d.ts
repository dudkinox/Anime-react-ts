export type Value = string | number | boolean | undefined | null;
export type Mapping = { [key: string]: any };
export type Argument = Value | Mapping | Argument[];

export default function classNames(...args: Argument[]): string;
