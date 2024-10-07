/* eslint-disable no-undef, import/no-extraneous-dependencies */

// Import built-in Jest matchers
import "@testing-library/react-native/extend-expect";

jest.mock("@expo/vector-icons", () => ({
    Ionicons: "",
    AntDesign: "",
}));
