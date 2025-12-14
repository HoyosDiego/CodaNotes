import { render } from "@testing-library/react-native";
import { Text } from "react-native";
import { Card } from "../components/ui/card/card";

describe("Card Component", () => {
  test("debe renderizar los hijos correctamente", () => {
    const testId = "child-text";
    const { getByTestId } = render(
      <Card>
        <Text testID={testId}>Contenido de prueba</Text>
      </Card>,
    );

    expect(getByTestId(testId)).toBeTruthy();
  });
});
