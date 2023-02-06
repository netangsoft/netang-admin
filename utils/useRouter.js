import $n_has from 'lodash/has'
import $n_get from 'lodash/get'

import $n_forIn from '@netang/utils/forIn'
import $n_slash from '@netang/utils/slash'

import { configs } from './config'

const {
    // 自定义路由
    routers,
} = configs

/**
 * 获取路由
 */
export function getRouters(mainRouter, errorRouter) {

    const routes = [
        mainRouter
    ]

    $n_forIn(routers, function(item, key) {

        // 如果没有 meta
        if (! $n_has(item, 'meta')) {
            item.meta = {}
        }

        // path
        item.path = $n_slash(key, 'start', true)

        // 如果是单独路由
        if ($n_get(item.meta, 'parent') === false) {
            routes.push(item)

        // 否则为框架页面
        } else {
            mainRouter.children.push(item)
        }
    })

    // 添加错误路由
    routes.push(errorRouter)

    return routes
}
