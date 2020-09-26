import R from 'ramda'
import hasOwnProp from 'has-own-prop'

module.exports = (menu: any) => {
  let flattenMenu: any = []
  let id = 0

  const children = R.prop('children')
  const dissoc = R.dissoc('children')
  const assocId = R.assoc('id')
  const assocParentId = R.assoc('parentId')

  const iterate = (childrenArray: any, parentId = 0) => {
    childrenArray.forEach(obj => {
      id += 1
      flattenMenu = R.concat(flattenMenu, [
        dissoc(assocId(id, assocParentId(parentId, obj)))
      ])

      if (children(obj)) {
        iterate(children(obj), id)
      }
    })
  }

  if (hasOwnProp(menu, 'children') && menu.children.length > 0) {
    iterate(menu.children)
  }
  return flattenMenu
}
