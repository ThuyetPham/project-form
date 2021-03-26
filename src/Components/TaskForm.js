import React from 'react';

class TaskForm extends React.Component {

    constructor() {
        super()
        this.state = {
            name: '',
            status: false,
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name==="status") {
            value = target.value === "true" ? true : false
        }
        this.setState({
            [name]:value
        })
    }

    onSubmit = (event) => {
        event.preventDefault(this.state)
        this.props.onSubmit(this.state)
    }

  render() {
    return (
      <>
             <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Thêm Công Việc
                        <button onClick={ this.onCloseForm }> X </button>
                        </h3>

                        
                    </div>
                    <div className="panel-body">

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input 
                                type="text" 
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                                
                                />
                            </div>
                            <label>Trạng Thái :</label>
                            <select 
                            className="form-control" 
                            required="required"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
                            >
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                                <button type="submit" className="btn btn-danger" onClick={ this.onCloseForm }>Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
          
      </>
    )
  }
}

export default TaskForm;
