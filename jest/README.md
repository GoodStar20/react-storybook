# TESTING WITH JEST AND ENZYME
enzyme-to-json provides a better component format for snapshot comparison than Enzyme’s internal component representation. snapshotSerializers allows you to minimise code duplication when working with snapshots. Without the serializer each time a component is created in a test it must have the enzyme-to-json method .toJson() used individually before it can be passed to Jest’s snapshot matcher, with the serializer you never use it individually.


### Creating Tests
    Files with .js suffix in __tests__ folders.
    Files with .test.js suffix.
    Files with .spec.js suffix.


