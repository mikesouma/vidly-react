import React from 'react';
import TableHeader from './common/tableHeader';
import TableBody from './common/TableBody';
import Like from './common/like';

class MoviesTable extends React.Component {
  
    columns = [
        {path: 'title' , label: 'Title'},
        {path: 'genre.name' , label: 'Genre'},
        {path: 'numberInStock' , label: 'Stock'},
        {path: 'dailyRentalRate' , label: 'rate'},
        { 
            key: 'like',
            content: movie => <Like liked={movie.liked} onClick={() => this.props.onLike(movie)}/>
        },
        { 
            key: 'delete', 
            content: movie => (<button
                onClick={() => this.props.onDelete(movie)}
                className="btn btn-danger btn-sm">
                    Delete
                </button>
            )
        },
    ]
    render() { 
        const { movies, onSort, sortColumn } = this.props;
        return (  
                <table className="table">
                        <TableHeader
                            columns={this.columns}
                            sortColumn={sortColumn}
                            onSort={onSort}
                        />
                       <TableBody columns={ this.columns } data={ movies }/>
                </table>
        );
    }
}
 

export default MoviesTable;