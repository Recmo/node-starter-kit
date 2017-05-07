import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { addTodo } from '../reducers/todos';
import { getTranslator } from '../reducers/translation';

class AddTodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  valueChanged(value) {
    this.setState({ value });
  }

  buttonClick() {
    this.setState({ value: '' });
    this.props.onAddTodo(this.state.value);
  }

  render() {
    const i18n = this.props.i18n;
    return (
      <div>
        <TextField
          id="add-todo"
          value={this.state.value}
          floatingLabelText={i18n('Add new todo entry')}
          hintText={i18n('Buy milk')}
          onChange={(e, v) => this.valueChanged(v)}
        />
        <FlatButton label={i18n('Add Todo')} primary onClick={() => this.buttonClick()} />
      </div>
    );
  }
}

AddTodoComponent.propTypes = {
  i18n: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    i18n: getTranslator(state),
  }),
  dispatch => ({
    onAddTodo: (text) => {
      dispatch(addTodo(text));
    },
  })
)(AddTodoComponent);
