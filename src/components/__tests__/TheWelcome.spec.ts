import { describe, expect, it } from "vitest";

import { mount } from "@vue/test-utils";
import TheWelcome from "../TheWelcome.vue";

describe("TheWelcome", () => {
  it("renders properly", async () => {
    const wrapper = mount(TheWelcome);
    expect(wrapper.get("h1").text()).toBe("0");
    expect(wrapper.get("h1").text()).not.toBe("-1");
    expect(wrapper.get("h1").text()).not.toBe("1");
  });
  it("renders properly", async () => {
    const wrapper = mount(TheWelcome);
    await wrapper.get('button[name="dec"]').trigger("click");
    expect(wrapper.get("h1").text()).toBe("-1");
    expect(wrapper.get("h1").text()).not.toBe("1");
  });
  it("renders properly", async () => {
    const wrapper = mount(TheWelcome);
    await wrapper.get('button[name="inc"]').trigger("click");
    expect(wrapper.get("h1").text()).toBe("1");
    expect(wrapper.get("h1").text()).not.toBe("-1");
  });
  it("renders properly", async () => {
    const wrapper = mount(TheWelcome);
    await wrapper.get('button[name="dec"]').trigger("click");
    await wrapper.get('button[name="dec"]').trigger("click");
    await wrapper.get('button[name="inc"]').trigger("click");
    await wrapper.get('button[name="res"]').trigger("click");
    expect(wrapper.get("h1").text()).toBe("0");
    expect(wrapper.get("h1").text()).not.toBe("-1");
  });
});
