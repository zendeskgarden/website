## Usage

```graphql
query {
  package: gardenReactPackage {
    version
    name
    description
    packageName
  }
  components: gardenReactComponent {
    name
    description
    extends
    props
  }
  subcomponents: gardenReactComponent {
    name
    description
    extends
    props
  }
}
```
