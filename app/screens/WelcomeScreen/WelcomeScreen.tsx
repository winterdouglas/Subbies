import React from "react"
import { View, ViewStyle } from "react-native"
import { EmptyState, LinearGradient, ListItem, Screen } from "@components"
import { FlashList } from "@shopify/flash-list"
import { spacing } from "@theme"
import { AppStackScreenProps } from "@navigators"
import { hexToHSL, toHSLString } from "@utils/colorUtils"
import { useHeader } from "@hooks"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen = function WelcomeScreen(_props: WelcomeScreenProps) {
  useHeader({
    title: "Subbies",
  })

  return (
    <Screen preset="fixed" safeAreaEdges={["bottom"]}>
      <FlashList
        contentContainerStyle={$listContainer}
        data={[]}
        ItemSeparatorComponent={Separator}
        estimatedItemSize={72}
        ListEmptyComponent={EmptyState}
        renderItem={({ item }) => {
          const { title, hex } = item
          const color = hexToHSL(`#${hex}`)
          const gradientStart = toHSLString(color)
          const gradientEnd = toHSLString({ ...color, l: Math.min(color.l - color.l * 0.2, 100) })

          return (
            <ListItem
              text={title}
              round
              BackgroundComponent={LinearGradient}
              backgroundProps={{
                colors: [gradientStart, gradientEnd],
                start: { x: 1, y: 0 },
                end: { x: 0.2, y: 0 },
              }}
              rightIcon="caretRight"
              textStyle={{ color: "white" }}
              rightIconColor="white"
            />
          )
        }}
      />
    </Screen>
  )
}

export const Separator = () => {
  return <View style={$separator}></View>
}

const $listContainer: ViewStyle = {
  padding: spacing.medium,
}

const $separator: ViewStyle = {
  height: spacing.medium,
}
