# Keyteq Labs dashy dashboard

## API

### Sensors

A sensor is a unique entity in the dashboard able to receive sensing data.
You can push data as easy as this:

Note that the `time` property also defines the precision for your sensor.
If it only receives data with the `year` part set, that will be your level of precision.
The `time` property is also unique, so pushing with the `value` key will override it.
Push using `increment` to have it simply add to the existing value.

```js
sensor.push({
    sensor_id: 12,
    date: '2013-10-16',
    time: '16:20',
    value: 10
});
```
