import React from 'react';



class TaskItem extends React.Component {

    onUpdateStatus = () => {
       this.props.onUpdateStatus(this.props.task.id)
    }

    DeleteItem = () => {
        this.props.DeleteItem(this.props.task.id)
    }

    onUpDate = () => {
        this.props.onUpDate(this.props.task.id)
    }

  render() {
    var { task, index } = this.props;
    return (
        <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span 
                        className={ task.status === true ? 'label label-danger' : 'label label-success'}
                        onClick={this.onUpdateStatus}
                            >
                                {task.status === true ? 'kích hoạt' : 'Ẩn'}
                            </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick={this.onUpDate}>
                        <span className="fa fa-pencil mr-5" ></span>Sửa
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger" onClick={this.DeleteItem}>
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
    )
  }
}

export default TaskItem;
