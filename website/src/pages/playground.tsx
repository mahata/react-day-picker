import React from "react";

import Layout from "@theme/Layout";
import * as locales from "date-fns/locale";
import { Highlight, Prism, themes } from "prism-react-renderer";
import {
  DateRange,
  DayPicker,
  DayPickerProps,
  Mode,
  isDateRange
} from "react-day-picker";
import { DayPicker as DayPickerUtc } from "react-day-picker/utc";

import { BrowserWindow } from "../components/BrowserWindow";

import styles from "./playground.module.css";

/**
 * Function to format a json object of props to a jsx source displaying the
 * props as example
 */
function toJSX(props: Partial<DayPickerProps>) {
  return (
    Object.keys(props)
      // @ts-expect-error abc
      .filter((key) => props[key] !== undefined && props[key] !== false)
      .map((key) => {
        // @ts-expect-error abc
        const value = props[key] as string | number | boolean;
        const valueAsString =
          typeof value === "string"
            ? `="${value}"`
            : typeof value === "number"
              ? `={${value}}`
              : value
                ? ""
                : `x={${JSON.stringify(value)}}`;
        return ` ${key}${valueAsString}`;
      })
      .join("\n")
  );
}

export default function Playground() {
  const initialProps: DayPickerProps = {
    mode: "single",
    locale: locales.enUS
  };
  const [props, setProps] = React.useState<DayPickerProps>(initialProps);
  const [selected, setSelected] = React.useState<
    Date | Date[] | DateRange | undefined
  >();
  const [utc, setUtc] = React.useState(false);

  const Component = utc ? DayPickerUtc : DayPicker;
  const formattedProps = `<DayPicker${toJSX({ ...props, locale: undefined })} />`;

  return (
    <Layout>
      <div className={styles.root}>
        <h1>DayPicker v9 Playground</h1>
        <form className={styles.form}>
          <fieldset>
            <legend>Customization</legend>
            <div className={styles.fields}>
              <label>
                Caption Layout:
                <select
                  name="captionLayout"
                  onChange={(e) =>
                    setProps({
                      ...props,
                      captionLayout: e.target.value as
                        | "label"
                        | "dropdown"
                        | "dropdown-months"
                        | "dropdown-years"
                    } as DayPickerProps)
                  }
                >
                  <option value="label">Label</option>
                  <option value="dropdown">Dropdown</option>
                  <option value="dropdown-months">Dropdown months</option>
                  <option value="dropdown-years">Dropdown years</option>
                </select>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="showOutsideDays"
                  onChange={(e) =>
                    setProps({ ...props, showOutsideDays: e.target.checked })
                  }
                />
                Show outside days
              </label>
              <label>
                <input
                  type="checkbox"
                  name="showWeekNumber"
                  onChange={(e) =>
                    setProps({ ...props, showWeekNumber: e.target.checked })
                  }
                />
                Show week number
              </label>
              <label>
                <input
                  type="checkbox"
                  name="fixedWeeks"
                  onChange={(e) =>
                    setProps({ ...props, fixedWeeks: e.target.checked })
                  }
                />
                Fixed weeks
              </label>
              <label>
                <input
                  type="checkbox"
                  name="hideWeekdayRow"
                  onChange={(e) =>
                    setProps({ ...props, hideWeekdayRow: e.target.checked })
                  }
                />
                Hide weekdays
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Navigation</legend>
            <div className={styles.fields}>
              <label>
                <input
                  type="checkbox"
                  name="showWeekDays"
                  onChange={(e) =>
                    setProps({ ...props, hideNavigation: e.target.checked })
                  }
                />
                Hide navigation
              </label>
              <label>
                <input
                  type="checkbox"
                  name="showWeekDays"
                  onChange={(e) =>
                    setProps({ ...props, disableNavigation: e.target.checked })
                  }
                />
                Disable navigation
              </label>
              <label>
                Number of months:
                <input
                  type="number"
                  min={1}
                  max={12}
                  size={3}
                  name="numberOfMonths"
                  onChange={(e) =>
                    setProps({
                      ...props,
                      numberOfMonths: Number(e.target.value)
                    })
                  }
                />
              </label>
            </div>
          </fieldset>

          <fieldset>
            <legend>Localization</legend>
            <div className={styles.fields}>
              <label>
                Locale:
                <select
                  name="locale"
                  value={Object.keys(locales).find(
                    // @ts-expect-error abc
                    (locale) => locales[locale] === props.locale
                  )}
                  onChange={(e) =>
                    setProps({
                      ...props,
                      locale: locales[e.target.value as keyof typeof locales]
                    })
                  }
                >
                  {Object.keys(locales).map((locale) => (
                    <option key={locale} value={locale}>
                      {/* @ts-expect-error abc */}
                      {locales[locale].code}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Weeks starts on:
                <select
                  name="weekStartsOn"
                  onChange={(e) =>
                    setProps({
                      ...props,
                      weekStartsOn: (e.target.value
                        ? Number(e.target.value)
                        : undefined) as
                        | DayPickerProps["weekStartsOn"]
                        | undefined
                    })
                  }
                >
                  <option></option>
                  <option value="0">Sunday</option>
                  <option value="1">Monday</option>
                  <option value="2">Tuesday</option>
                  <option value="3">Wednesday</option>
                  <option value="4">Thursday</option>
                  <option value="5">Friday</option>
                  <option value="6">Saturday</option>
                </select>
              </label>
              <label>
                First week contains:
                <select
                  name="firstWeekContainsDate"
                  onChange={(e) =>
                    setProps({
                      ...props,
                      firstWeekContainsDate: Number(
                        e.target.value
                      ) as DayPickerProps["firstWeekContainsDate"]
                    })
                  }
                >
                  <option></option>
                  <option value="1">Monday</option>
                  <option value="4">Thursday</option>
                </select>
              </label>
              <label>
                <input
                  type="checkbox"
                  name="UTC"
                  onChange={(e) => {
                    setSelected(undefined);
                    setUtc(e.target.checked);
                  }}
                />
                UTC
              </label>
              <label>
                <input
                  type="checkbox"
                  name="rtl"
                  onChange={(e) =>
                    setProps({
                      ...props,
                      dir: e.target.checked ? "rtl" : "ltr"
                    })
                  }
                />
                Right-to-left
              </label>
              <label>
                <input
                  type="checkbox"
                  name="ISOWeek"
                  onChange={(e) =>
                    setProps({ ...props, ISOWeek: e.target.checked })
                  }
                />
                ISO Week
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Selection</legend>
            <div className={styles.fields}>
              <label>
                Selection mode:
                <select
                  name="mode"
                  onChange={(e) => {
                    const mode = e.target.value as Mode | undefined;
                    setSelected(undefined);
                    setProps({
                      ...props,
                      // @ts-expect-error abc
                      mode
                    });
                  }}
                >
                  <option></option>
                  <option value="single">single</option>
                  <option value="multiple">multiple</option>
                  <option value="range">range</option>
                </select>
              </label>
              {props.mode && (
                <label>
                  <input
                    type="checkbox"
                    name="required"
                    onChange={(e) => {
                      setSelected(undefined);
                      // @ts-expect-error abc
                      setProps({ ...props, required: e.target.checked });
                    }}
                  />
                  Required
                </label>
              )}
              {props.mode === "range" || props.mode === "multiple" ? (
                <label>
                  Min Selection:
                  <input
                    type="number"
                    min={0}
                    max={12}
                    size={3}
                    name="min"
                    onChange={(e) =>
                      setProps({
                        ...props,
                        min: Number(e.target.value)
                      })
                    }
                  />
                </label>
              ) : null}
              {props.mode === "range" || props.mode === "multiple" ? (
                <label>
                  Max Selection:
                  <input
                    type="number"
                    min={0}
                    max={12}
                    size={3}
                    name="max"
                    onChange={(e) =>
                      setProps({
                        ...props,
                        max: Number(e.target.value)
                      })
                    }
                  />
                </label>
              ) : null}
            </div>
          </fieldset>
        </form>
        <div className={styles.browserWindow}>
          <BrowserWindow url="">
            {/* @ts-expect-error abc */}
            <Component {...props} onSelect={setSelected} selected={selected} />
          </BrowserWindow>
        </div>
        <h2>Props</h2>
        <Highlight
          theme={themes.shadesOfPurple}
          code={formattedProps}
          language="tsx"
        >
          {({ className, style, tokens, getTokenProps }) => (
            <pre style={style} className={className}>
              {tokens.map((line, i) => {
                return line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ));
              })}
            </pre>
          )}
        </Highlight>
        {props.mode && (
          <h2>
            Selection mode: <code>{props.mode}</code>
          </h2>
        )}
        {selected && (
          <>
            <pre>
              {props.mode === "single" && selected && selected.toString()}
              {props.mode === "multiple" &&
                (selected as Date[] | undefined)?.map((date) => {
                  return (
                    <>
                      {date.toString()}
                      <br />
                    </>
                  );
                })}
              {props.mode === "range" && isDateRange(selected) && (
                <>
                  From: {selected.from && selected.from.toString()}
                  <br />
                  To: {"  "}
                  {selected.to && selected.to.toString()}
                </>
              )}
            </pre>
          </>
        )}
      </div>
    </Layout>
  );
}
