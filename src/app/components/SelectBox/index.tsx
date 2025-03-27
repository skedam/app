"use client";
import React from "react";
import { Select, Props } from "chakra-react-select";

const shapes = {
  square: {
    borderRadius: "0px",
  },
} as const;
const variants = {
  fill: {
    gray_200_02: {
      bg: "gray.200_02",
      color: "black.900",
    },
  },
} as const;
const sizes = {
  xs: {
    h: "16px",
    fontSize: "11px",
    px: "10px",
  },
} as const;

type VariantType = typeof variants;
type VariantKey = keyof VariantType;
type ColorKey = keyof VariantType[keyof VariantType];

type selectOptionType = { value: string; label: string };
type SelectProps = Omit<Props, "getOptionLabel"> &
  Partial<{
    options: selectOptionType[];
    isSearchable: boolean;
    isMulti: boolean;
    onChange: (option: any) => void;
    value: string;
    indicator: React.ReactElement;
    getOptionLabel: (e: any) => string;
    styles: any;
    [x: string]: any;
    shape: keyof typeof shapes;
    variant: VariantKey;
    size: keyof typeof sizes;
    color: ColorKey;
  }>;

const SelectBox = React.forwardRef<any, SelectProps>(
  (
    {
      options = [],
      isSearchable = false,
      isMulti = false,
      indicator,
      style,
      shape = "",
      size = "xs",
      variant = "fill",
      color = "gray_200_02",
      ...restProps
    },
    ref,
  ) => {
    const [menuPortalTarget, setMenuPortalTarget] = React.useState<HTMLElement | null>(null);

    React.useEffect(() => {
      setMenuPortalTarget(document.body);
    }, []);

    return (
      <>
        <Select
          ref={ref}
          options={options}
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          styles={{
            menuPortal: (base) => ({ ...base, zIndex: 999999 }),
          }}
          chakraStyles={{
            container: (provided) => ({
              ...provided,
              ...sizes[size as keyof typeof sizes],
              ...shapes[shape as keyof typeof shapes],
              ...(variants[variant as VariantKey][color as ColorKey] as Object),
              ...style,
              zIndex: 0,
              display: "flex",
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "none",
              minHeight: "auto",
              width: "100%",
              color: "inherit !important",
              "&:hover": {
                border: "0 !important",
              },
              "&:focus-visible, &[data-focus-visible]": {
                boxShadow: "none !important",
              },
              "&>div": {
                padding: "0 !important",
              },
            }),
            option: (provided, state) => ({
              ...provided,
              backgroundColor: state.isSelected && "#ffffff !important",
              color: state.isSelected && "#000000 !important",
              "&:hover": {
                backgroundColor: "#ffffff",
                color: "#000000",
              },
            }),
            singleValue: (provided) => ({
              ...provided,
              display: "flex",
              marginLeft: undefined,
              marginRight: undefined,
            }),
            menu: ({ width, ...css }) => ({ ...css }),
          }}
          menuPortalTarget={menuPortalTarget}
          closeMenuOnScroll={(event: any) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
      </>
    );
  },
);

export { SelectBox };
