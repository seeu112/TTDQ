function logAIProcess(toolName, params, output) {
    const record = {
        timestamp: new Date().toISOString(),
        tool: toolName,
        parameters: params,
        outputHash: Buffer.from(JSON.stringify(output)).toString('base64').slice(0,20)
    }
    console.log('[AI Generation Record]', record)
}
// 示例：记录AI Lab生成彩图的参数
logAIProcess('AIRI Lab', {技法: '脱胎漆器螺钿镶嵌', 分辨率: '4K', 色彩模式: '朱砂金箔风', 生成步数: 32}, 'lacquer_001.png')