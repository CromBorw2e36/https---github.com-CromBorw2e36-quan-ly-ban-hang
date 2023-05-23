import React, { useEffect, useState } from 'react'
import DataGrid, { Button, Column, ColumnChooser, ColumnFixing, FilterRow, GroupPanel, HeaderFilter, Pager, Paging, Scrolling, Selection } from 'devextreme-react/data-grid';
import { SysClient, SysRawTableModel } from '../../../common/interface/BHInterface';
import 'devextreme/data/odata/store';
import { Paper } from '@mui/material';
import "./index.css";


enum SCROLINGS {
  infinite,
  virtual
}

interface Iprops {
  dataSource: any;
  columns?: any;
  key: string;
  title?: string | undefined;
  Scrolling?: SCROLINGS | undefined;
  HandleClick?: (data: any) => void;
  FilterRow?: boolean | undefined;
  HeaderFilter?: boolean | undefined;
  GroupPanel?: boolean | undefined;

  ColumnChooser?: boolean | undefined;
}

interface IColumn {
  dataField: string | undefined;
  caption: string | undefined;
  dataType?: string | undefined;
  width?: number | undefined;
}

const BHDataGrid = (props: Iprops) => {

  // const [rawTable, setRawTable] = useState<SysRawTableModel[]>([] as SysRawTableModel[]);
  const [columns, setColumns] = React.useState<IColumn[]>([] as IColumn[]);

  const sysClient = new SysClient();

  const Menuid = JSON.parse(localStorage.getItem('menuid') || "{}");

  React.useEffect(() => {
    sysClient.sysRawTableGet({
      ...new SysRawTableModel(),
      menuId: Menuid.id,
    }).then((res) => {
      if (res) {

        res.map((item: any) => {

          if (item.show) {
            const col: IColumn = {
              dataField: item.tableColumn,
              caption: item.name,
              dataType: item.dataType
            }
            setColumns([...columns, col]);
          }

        });

      }

    })

  }, [])

  const EditIconClick = (e: any) => {
    const { row } = e;

    if (props.HandleClick) {
      props.HandleClick({
        row: row,
        action: "EDIT"
      });

    }
  }

  const ViewIconClick = (e: any) => {
    const { row } = e;

    if (props.HandleClick) {
      props.HandleClick({
        row: row,
        action: "DETAIL"
      });

    }
  }



  const RemoveIconClick = (e: any) => {
    const { row } = e;

    if (props.HandleClick) {
      props.HandleClick({
        row: row,
        action: "DELETE"
      });
    }
  }

  const onSelectChange = (e: any) => {
    const { selectedRowKeys } = e;

    if (props.HandleClick) {
      props.HandleClick({
        row: selectedRowKeys,
        action: "SELECTED"
      });
    }
  }

  return (
    <Paper >
      <DataGrid
        id="gridContainer"
        className='dx-theme-accent-as-background-color '
        dataSource={props.dataSource ? props.dataSource : []}
        keyExpr={props.key || ""}
        showBorders={true}
        allowColumnReordering={true}
        allowColumnResizing={true}
        columnMinWidth={50}
        columnAutoWidth={true}
        height={"70vh"}
        onSelectionChanged={onSelectChange}
        hoverStateEnabled={true}

      >

        <Selection mode="multiple" />

        <ColumnChooser enabled={props.ColumnChooser || false} />

        <ColumnFixing enabled={true} />

        {
          columns
          && columns.map(col => (
            <Column
              key={col.dataField}
              dataField={col.dataField}
              caption={col.caption}
              dataType={col.caption}
            />
          ))


        }


        <Column type="buttons">
          <Button hint="Xem chi tiết" icon="box" cssClass="text-primary"
            onClick={ViewIconClick}
          />
          <Button hint="Chỉnh sửa" icon="edit" cssClass="text-success"
            onClick={EditIconClick}
          />
          <Button hint="Xóa" icon="remove" cssClass="text-danger"
            // visible={this.isCloneIconVisible} 
            // disabled={this.isCloneIconDisabled} 
            onClick={RemoveIconClick}
          />
        </Column>


        <Paging defaultPageSize={10} />
        
        <Pager
          visible={true}
          allowedPageSizes={true}
          displayMode={false}
          showPageSizeSelector={true}
          showInfo={true}
          showNavigationButtons={true} 
          />


        {/* <Scrolling columnRenderingMode="virtual" /> */}
        <Paging enabled={false} />
        <FilterRow visible={props.FilterRow || false} />
        <HeaderFilter visible={props.HeaderFilter || true} />
        <GroupPanel visible={props.GroupPanel || false} />
        <Scrolling mode={props.Scrolling || ""} />

      </DataGrid>
    </Paper >
  )
}

export default BHDataGrid;