import React from 'react';

class TaskForm extends React.Component {

    constructor() {
        super()
        this.state = {
            id:'',
            name: '',
            status: false,
        }
    }

    componentWillMount () {
        if(this.props.taskUpdate) {
            this.setState({
                id: this.props.taskUpdate.id,
                name: this.props.taskUpdate.name,
                status: this.props.taskUpdate.status,

            })
        }
    }

    componentWillReceiveProps (nextProps) {
        if(nextProps && nextProps.taskUpdate) {
            this.setState({
                id: nextProps.taskUpdate.id,
                name: nextProps.taskUpdate.name,
                status: nextProps.taskUpdate.status,
        })
    }else if(!nextProps.task) {
        this.setState({
            id: '',
            name: '',
            status: true
        })
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
      var {id} = this.state;
    return (
      <>
             <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">{id !=="" ? 'sửa công việc' : 'thêm công việc'}
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
