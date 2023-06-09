import { deleteApiAll, postApiAll, putApiAll } from "../api/get-apit";

export interface AccountModel {
    username?: string | undefined;
    password?: string | undefined;
    c_date?: string | undefined;
    phone?: string | undefined;
    email?: string | undefined;
    permission?: boolean | undefined;
    status?: number | undefined;
    ma_CH?: string | undefined;

}


export interface UserModel {
    username?: string | undefined;
    password?: string | undefined;
    c_date?: string | undefined;
    phone?: string | undefined;
    email?: string | undefined;
    permision?: string | undefined;
    status?: string | undefined;
    ma_ch?: string | undefined;
    id?: string | undefined;
    fullname?: string | undefined;
    image?: string | undefined;
    birthday?: string | undefined;
    gender?: string | undefined;
    address?: string | undefined;
    cCCD?: string | undefined;
    idBike?: string | undefined;
    note?: string | undefined;
}

export interface BhbillDetailModel {
    id?: string | undefined;
    idBill?: string | undefined;
    idProduct?: string | undefined;
    totalNumber?: number | undefined;
    price?: number | undefined;
    pricePersent?: number | undefined;
    totalPrice?: number | undefined;
}


export interface SysMenuRoleModel {
    id?: string | undefined;
    menuid?: string | undefined;
    permisionCode?: string | undefined;
    name?: string | undefined;
    link?: string | undefined;
    c_date?: string | undefined;
    numberOrder?: number | undefined;
    maCh?: string | undefined;
    show?: boolean | undefined;
    component?: string | undefined;
    icon?: string | undefined;
}

export interface SysRoleRightModel {
    id?: string | undefined;
    menuid?: string | undefined;
    menuStt?: string | undefined;
    nameVn?: string | undefined;
    nameEn?: string | undefined;
    class?: string | undefined;
    icon?: string | undefined;
    show?: string | undefined;
    enable?: boolean | undefined;
    color?: string | undefined;
}

export interface ProductionModel {
    id?: string | undefined;
    name?: string | undefined;
    about?: string | undefined;
    review?: number | undefined;
    total?: number | undefined;
    price?: number | undefined;
    pricePersent?: number | undefined;
    images?: string | undefined;
    c_Date?: Date | undefined;
    c_User?: string | undefined;
    status?: boolean | undefined;
    show?: boolean | undefined;
    e_Date?: Date | undefined;
    ma_ch?: string | undefined;
}

export class ProductionModel {

    id?: string | undefined;
    name?: string | undefined;
    about?: string | undefined;
    review?: number | undefined;
    total?: number | undefined;
    price?: number | undefined;
    pricePersent?: number | undefined;
    images?: string | undefined;
    c_Date?: Date | undefined;
    c_User?: string | undefined;
    status?: boolean | undefined;
    show?: boolean | undefined;
    e_Date?: Date | undefined;
    ma_ch?: string | undefined;


    constructor() {
        this.id = undefined;
        this.name = undefined;
        this.about = undefined;
        this.review = undefined;
        this.total = undefined;
        this.price = undefined;
        this.pricePersent = undefined;
        this.images = undefined;
        this.c_Date = undefined
        this.c_User = undefined;
        this.status = undefined;
        this.show = undefined;
        this.e_Date = undefined;
        this.ma_ch = undefined;
    }

}

export interface SysRawTableModel {
    id?: string | undefined;
    menuId?: string | undefined;
    name?: string | undefined;
    nameEn?: string | undefined;
    dataType?: string | undefined;
    align?: string | undefined;
    show?: boolean | undefined;
    numberOrder?: number | undefined;
    cDate?: Date | undefined;
    cUser?: string | undefined;
}



export class SysRawTableModel {

    id?: string | undefined;
    menuId?: string | undefined;
    tableColumns?: string | undefined;
    name?: string | undefined;
    nameEn?: string | undefined;
    dataType?: string | undefined;
    align?: string | undefined;
    show?: boolean | undefined;
    numberOrder?: number | undefined;
    cDate?: Date | undefined;
    cUser?: string | undefined;


    constructor() {
        this.id = undefined;
        this.menuId = undefined;
        this.tableColumns = undefined;
        this.name = undefined;
        this.nameEn = undefined;
        this.dataType = undefined;
        this.align = undefined;
        this.show = undefined;
        this.numberOrder = undefined;
        this.cDate = new Date();
        this.cUser = undefined;
    }

}


export class BhClient {

    productionGet(body: ProductionModel) {
        return postApiAll("/api/BHproducts/ProductGet", body);
    }

    productionIns(body: ProductionModel) {
        return postApiAll("/api/BHproducts/ProductIns", body);
    }

    productionUpd(body: ProductionModel) {
        return putApiAll("/api/BHproducts/ProductUpd", body);
    }

    productionDel(body: ProductionModel) {
        return deleteApiAll("/api/BHproducts", body);
    }

}

export class SysClient {


    sysRawTableGet(body: SysRawTableModel) {
        return postApiAll("/api/SysMenuRoles/SysRawTableGet", body);
    }

}