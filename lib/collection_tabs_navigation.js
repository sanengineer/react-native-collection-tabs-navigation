import {
  createNavigator,
  TabRouter,
  createAppContainer,
} from "react-navigation";

const createCollectionTabsNavigator = (
  routeConfigMap,
  collectionTabsNavigationConfig,
  component
) => {
  const customTabRouter = TabRouter(
    routeConfigMap,
    collectionTabsNavigationConfig
  );

  return createNavigator(component, customTabRouter, {});
};

const CollectionTabsContainer = ({
  routeConfigMap,
  collectionTabsNavigationConfig,
  component,
}) => {
  const AppContainer = createAppContainer(
    createCollectionTabsNavigator(
      routeConfigMap,
      collectionTabsNavigationConfig,
      component
    )
  );

  return <AppContainer />;
};

export default CollectionTabsContainer;
