import React, { useLayoutEffect, DependencyList } from "react";
import { useNavigation } from "@react-navigation/native";
import { Header, HeaderProps } from "@components/Header";

/**
 * A hook that can be used to easily set the Header of a react-navigation screen from within the screen's component.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Utils-useHeader.md)
 */
export function useHeader(headerProps: HeaderProps, deps: DependencyList = []) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => <Header {...headerProps} />,
    });
  }, deps);
}
