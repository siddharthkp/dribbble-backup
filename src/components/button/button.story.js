import React from "react"
import { storiesOf } from "@storybook/react"
import Button from "./index"

storiesOf("Button", module)
  .add("primary", () => <Button appearance="primary">Button Label</Button>)
  .add("secondary", () => <Button appearance="secondary">Button Label</Button>)
  .add("secondary-alt", () => (
    <Button appearance="secondary-alt">Button Label</Button>
  ))
  .add("info", () => <Button appearance="info">Button Label</Button>)
  .add("accent", () => <Button appearance="accent">Button Label</Button>)
  .add("success", () => <Button appearance="success">Button Label</Button>)
  .add("disabled primary", () => (
    <Button disabled appearance="primary">
      Button Label
    </Button>
  ))
  .add("disabled secondary", () => (
    <Button disabled appearance="secondary">
      Button Label
    </Button>
  ))
  .add("disabled secondary-alt", () => (
    <Button disabled appearance="secondary-alt">
      Button Label
    </Button>
  ))
  .add("disabled info", () => (
    <Button disabled appearance="info">
      Button Label
    </Button>
  ))
  .add("disabled accent", () => (
    <Button disabled appearance="accent">
      Button Label
    </Button>
  ))
  .add("disabled success", () => (
    <Button disabled appearance="success">
      Button Label
    </Button>
  ))
