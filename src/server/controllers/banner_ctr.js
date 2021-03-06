import Banner from '../models/banner_model';

export async function createBanner(ctx) {
    let postData = ctx.request.body;

    const result = {
        code: 200,
        message: '新增成功'
    };

    const banner = new Banner({ ...postData, createTime: +new Date() });

    const bannerResult = await banner.save().catch(err => {
        result.code = 500;
        result.message = "服务器错误";
    });

    result.banner = bannerResult;

    ctx.body = result;
}

export async function getBanners(ctx) {
    const filter = ctx.query.page ? { page: ctx.query.page } : {};
    let result = {
        code: 200,
        message: 'ok'
    };

    const banners = await Banner.find(filter, {
        href: 1,
        url: 1,
        text: 1,
        page: 1,
        author: 1,
    })
        .sort({ createTime: -1 })
        .catch(err => {
            result.code = 500;
            result.message = "服务器错误";
        });

    result.banners = banners || [];

    if (ctx) {
        ctx.body = result;
    }

    return banners;
}

export async function deleteBanner(ctx) {
    let id = ctx.params.id;

    const article = await Banner.findByIdAndRemove(id).catch(err => {
    if (err.name === "CastError") {
      return (ctx.body = {
        code: 400,
        message: 'Banner不存在或已删除'
      });
    }
        return ctx.body = {
      code: 500,
            message: '服务器内部错误'
        };
  });
    ctx.body = {
        code: 200,
        message: '删除成功'
    };
}

export async function updateBanner(ctx) {
    const id = ctx.params.id;
    const postData = ctx.request.body;

    const banner = await Banner.findByIdAndUpdate(id, { $set: postData }).catch(
        err => {
      if (err.name === "CastError") {
        return (ctx.body = {
          code: 400,
          message: 'Banner不存在或已删除'
        });
      }
            return ctx.body = {
                code: 500,
        message: "服务器内部错误"
      };
        },
    );

    ctx.body = {
        code: 200,
        message: '修改成功',
        banner
    };
}
