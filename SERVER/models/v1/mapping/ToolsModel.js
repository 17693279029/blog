const mongoose = require('mongoose')
let schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        comment: '工具名称'
    },
    icon: {
        type: String,
        required: true,
        default: 'https://images.pexels.com/photos/12825195/pexels-photo-12825195.png?auto=compress&cs=tinysrgb&w=600&lazy=load',
        comment: '工具图标'
    },
    abstract: {
        type: String,
        comment: '工具简介'
    },
    category: {
        type: String,
        comment: '类型'
    },
    tag: {
        type: String,
        comment: '标签'
    },
    url: {
        type: String,
        comment: '工具地址'
    },
    blank1: {
        type: String,
        comment: '预留1'
    },
    blank2: {
        type: String,
        comment: '预留2',
    },
    blank3: {
        type: String,
        comment: '预留3',
    },
    blank4: {
        type: String,
        comment: '预留4',
    },
    blank5: {
        type: String,
        comment: '预留5',
    },
    status: {
        type: Boolean,
        comment: '状态',
    },

},
    {
        timestamps: true,
        versionKey: false, // 设置不需要version  _V:0
    });
module.exports = mongoose.model('tools', schema);
