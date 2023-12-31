import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

const ProductFilterTab = ({ productFilter, setProductFilter }) => {
  const ProductFilterLabel = () => {
    switch (productFilter) {
      case 1:
        return "Handphone";
      case 2:
        return "Fashion";
      case 3:
        return "Sepatu";
      case 4:
        return "Otomotif";
      case 5:
        return "Other";
    }
  };

  return productFilter ? (
    <Menu width="90%">
      <MenuButton
        px={4}
        py={2}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        _hover={{ bg: "gray.400" }}
        _expanded={{ bg: "blue.400" }}
        _focus={{ boxShadow: "outline" }}
        width="90%"
        margin="0 auto"
        textAlign="left"
      >
        Filter: '{ProductFilterLabel()}' 
        <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <MenuItem
          onClick={() => {
            setProductFilter("");
          }}
        >
          Clear filter
        </MenuItem>
      </MenuList>
    </Menu>
  ) : (
    <Menu>
      <MenuButton
        px={4}
        py={2}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        _hover={{ bg: "#86BBD8" }}
        _expanded={{ bg: "#86BBD8" }}
        _focus={{ boxShadow: "outline" }}
        width="90%"
        margin="0 auto"
      >
        Filter by Category
        <ChevronDownIcon />
      </MenuButton>
      <MenuList matchWidth={true}>
        <MenuItem
          onClick={() => {
            setProductFilter(1);
          }}
        >
          Handphone
        </MenuItem>
        <MenuDivider />
        <MenuItem
          onClick={() => {
            setProductFilter(2);
          }}
        >
          Fashion
        </MenuItem>
        <MenuDivider />
        <MenuItem
          onClick={() => {
            setProductFilter(3);
          }}
        >
          Sepatu
        </MenuItem>
        <MenuDivider />
        <MenuItem
          onClick={() => {
            setProductFilter(4);
          }}
        >
          Otomotif
        </MenuItem>
        <MenuDivider />
        <MenuItem
          onClick={() => {
            setProductFilter(5);
          }}
        >
          Other
        </MenuItem>
        <MenuDivider />
        <MenuItem>Cancel</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProductFilterTab;
