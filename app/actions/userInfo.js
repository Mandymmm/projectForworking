import * as Types from '../action-types/userInfo'

// actionCreator 动作创建
export function update(data) { // update 修改的动作
    return {
        type:Types.UPDATE_CITY,
        data:data
    }
}