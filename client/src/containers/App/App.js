import React from "react";
import { Provider } from "react-redux";
import { Layout } from "antd";

import VehiclesContainer from "../VehiclesContainer/VehiclesContainer";
import store from "../../store";

import "./App.less";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Header className="app-header">Parking Lot</Header>
        <Content>
          <VehiclesContainer />
        </Content>
        <Footer className="app-footer">Created by Sebastian Botero</Footer>
      </Layout>
    </Provider>
  );
}

export default App;
