## Usage

```graphql
query {
  package: gardenReactPackage {
    version
    name
    description
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
