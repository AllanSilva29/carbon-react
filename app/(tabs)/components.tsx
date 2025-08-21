import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import {
  Accordion,
  Button,
  Checkbox,
  Loading,
  Notification,
  Text,
  TextInput,
  Toggle,
} from "@carbon/react-native";

// A simple helper component to create styled section titles
const SectionTitle = ({ title }: { title: string }) => (
  <Text style={styles.sectionTitle} type="heading-02" text={title} />
);

export default function ComponentsScreen() {
  // State for the controlled accordion
  const [openControl, setOpenControl] = useState(false);

  // State for new components
  const [textInputValue, setTextInputValue] = useState("");
  const [toggleValue, setToggleValue] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [radioValue, setRadioValue] = useState("radio-1");

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.scrollContentContainer}
        style={styles.view}
      >
        {/* --- Buttons --- */}
        <SectionTitle title="Buttons" />
        <View style={styles.componentWrapper}>
          <Button kind="primary" text="Primary button" onPress={() => {}} />
        </View>
        <View style={styles.componentWrapper}>
          <Button kind="secondary" text="Secondary button" onPress={() => {}} />
        </View>
        <View style={styles.componentWrapper}>
          <Button kind="danger" text="Danger button" onPress={() => {}} />
        </View>
        <View style={styles.componentWrapper}>
          <Button kind="ghost" text="Ghost button" onPress={() => {}} />
        </View>

        {/* --- Form inputs --- */}
        <SectionTitle title="Form Inputs" />
        <View style={styles.componentWrapper}>
          <TextInput
            label="Text input label"
            placeholder="Placeholder text"
            value={textInputValue}
            onChangeText={setTextInputValue}
          />
        </View>
        <View style={styles.componentWrapper}>
          <TextInput
            label="Password input"
            placeholder="Enter your password"
            value={textInputValue}
            onChangeText={setTextInputValue}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.componentWrapper}>
          <Toggle
            onChange={() => setToggleValue(!toggleValue)}
            toggled={toggleValue}
            label="Toggle switch"
          />
        </View>
        <View style={styles.componentWrapper}>
          <Checkbox
            id="checkbox-1"
            label="Checkbox label"
            checked={checkboxValue}
            onPress={() => setCheckboxValue(!checkboxValue)}
          />
        </View>

        {/* --- Accordions --- */}
        <SectionTitle title="Accordions" />
        <View style={styles.componentWrapper}>
          <Accordion title="I am first. You can open me." firstAccordion={true}>
            <Text text="I am the content of this accordion. Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
          </Accordion>
          <Accordion title="I am disabled" disabled={true}>
            <Text text="I am the content of this accordion" />
          </Accordion>
          <Accordion title="I am opened by default" open={true}>
            <Text text="I am the content of this accordion" />
            <Button
              text="Toggle the one below"
              onPress={() => setOpenControl((prev) => !prev)}
              style={styles.itemStyle}
            />
          </Accordion>
          <Accordion title="I can be controlled externally" open={openControl}>
            <Text
              type={"body-01"}
              text="Smaller text. This accordion's state is controlled by the button above."
            />
          </Accordion>
        </View>

        {/* --- Notifications and Feedback --- */}
        <SectionTitle title="Notifications & Feedback" />
        <View style={styles.componentWrapper}>
          <Notification
            kind="success"
            title="Success notification"
            subTitle="This is a toast notification that can be used to provide feedback."
            lowContrast={true}
          />
        </View>
        <View style={styles.componentWrapper}>
          <Notification
            kind="error"
            title="Error notification"
            subTitle="Something went wrong."
            lowContrast={true}
          />
        </View>
        <View style={styles.componentWrapper}>
          <Text text="Loading indicator:" />
          <Loading />
        </View>
      </ScrollView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  view: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: 64,
    paddingHorizontal: 16, // Add horizontal padding to the whole scroll view
  },
  sectionTitle: {
    marginTop: 32,
    marginBottom: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  componentWrapper: {
    marginBottom: 16, // Add space between components in a section
  },
  itemStyle: {
    marginTop: 8,
  },
});
