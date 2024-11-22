import { View, Text } from "react-native";
import React from "react";
import Roundbtn from "./Roundbtn";
import * as DropdownMenu from "zeego/dropdown-menu";

const Dropdown = () => {
  return (
    <View>
      {/* <Text>Dropdown</Text> */}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Roundbtn text={"more"} icon={"ellipsis-horizontal"} />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item key="statement">
            <DropdownMenu.ItemTitle>statement</DropdownMenu.ItemTitle>
            <DropdownMenu.ItemIcon
              ios={{
                name: "list.bullet.rectangle.fill",
                pointSize: 24,
              }}
            />
          </DropdownMenu.Item>
          <DropdownMenu.Item key="converter">
            <DropdownMenu.ItemTitle>Converter</DropdownMenu.ItemTitle>
            <DropdownMenu.ItemIcon
              ios={{
                name: "coloncurrencysign.arrow.circlepath",
                pointSize: 24,
              }}
            />
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </View>
  );
};

export default Dropdown;
