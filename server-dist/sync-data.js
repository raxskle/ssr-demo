export async function syncFunc(ctx) {
    const renderData = {
        msg: "Hello world! from server",
        ctx,
    };
    // do something here
    return renderData;
}
