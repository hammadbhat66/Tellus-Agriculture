import color from "./theme/colors";

export type ErrorType = {
  message: string;
} | any;



  export const getStatusColor = (status: string) => {
    switch (status) {
      case 'Healthy':
        return color.primaryFixed;
      case 'In Treatment':
        return color.tertiaryContainer;
      case 'Active':
        return color.primaryFixed;
      case 'Prime Bull':
        return color.onPrimary;
      case 'Deceased':
        return color.errorContainer;
      default:
        return color.primaryFixed;
    }
  }


export const getStatusTextColor = (status: string) => {
    switch (status) {
      case 'Healthy':
        return color.onTertiaryFixed;
      case 'In Treatment':
        return color.onPrimary;
      case 'Prime Bull':
        return color.primary;
      case 'Deceased':
        return color.error;
      default:
        return color.onPrimaryFixedVariant;
    }
  }
