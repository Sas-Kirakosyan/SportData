export function groupByNameTournament(data: any = {}) {
  const tree = { ...data };
  for (const key in tree) {
    const reg = tree[key].children;
    const by = "tournament";
    for (const key in reg) {
      const obj: any = {};
      reg[key].children.forEach((el: any) => {
        if (!obj[el[by].id]) {
          obj[el[by].id] = { name: el.tournament.name, children: [{ ...el }] };
        } else {
          obj[el[by].id].children.push({ ...el });
        }
      });
      reg[key].children = obj;
    }
  }

  return tree;
}

export function groupByNameRegion(data: any = {}) {
  const tree = { ...data };
  for (const key in tree) {
    const itemArr: any = [...tree[key].children];
    const by = "region";
    const obj: any = {};
    itemArr.forEach((el: any) => {
      if (!obj[el[by].id]) {
        obj[el[by].id] = { name: el.region.name, children: [{ ...el }] };
      } else {
        obj[el[by].id].children.push({ ...el });
      }
    });
    tree[key].children = obj;
  }
  return tree;
}

// function groupByNameRegion(data = {}){
//     const tree = {...data}
// for(let key in tree){

//     const itemArr = [...tree[key].children]
//      const by = 'region'
//      const obj = {}
//      itemArr.forEach((el)=> {
//        if(!obj[el[by].id]){
//               obj[el[by].id]  = {name: el.region.name,  children: [{...el}]};
//          }else{
//               obj[el[by].id].children.push({...el})
//          }
//       })
//      tree[key] = obj
//             }
//  return tree
// }

export function groupByName(arr: any, by: string) {
  const tree: any = {};
  arr.forEach((el: any) => {
    if (!tree[el[by].id]) {
      tree[el[by].id] = { name: el.sport.name, children: [{ ...el }] };
    } else {
      tree[el[by].id].children.push({ ...el });
    }
  });
  return tree;
}

export function takeId(data: any) {
  return Object.keys(data)[0];
}
