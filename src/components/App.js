import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-flexbox-grid';
import AppBar from 'material-ui/AppBar';
import { Toolbar } from 'material-ui/Toolbar';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { getTranslator } from '../reducers/translation';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

const AppComponent = ({ i18n }) => (
  <div>
    <AppBar title={i18n('To do app')} iconClassNameRight="muidocs-icon-navigation-expand-more" />
    <Toolbar />
    <br />
    <Grid fluid>
      <Row>
        <Col mdOffset={2} md={8} xs={12}>
          <Card>
            <CardHeader
              title={i18n('The to do list')}
              subtitle={i18n('Your list of things to be done.')}
            />
            <CardText>
              <VisibleTodoList />
            </CardText>
            <Divider />
            <Subheader>Add todos</Subheader>
            <CardText>
              <AddTodo />
            </CardText>
            <Divider />
            <CardActions>
              <Footer />
            </CardActions>
          </Card>
        </Col>
      </Row>
    </Grid>
  </div>
);

AppComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
};

export default connect(state => ({
  i18n: getTranslator(state),
}))(AppComponent);
