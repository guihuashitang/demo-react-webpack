module.exports = {
  ENV_CONFIG: '"dev"',
  NODE_ENV: '"development"',
  BASE_API: {
    ahqp:'"//test.manager.sincebest.com"',
    development_wbqp:'"//oms.qx.sincebest.com/qxqp/manager-web"',
    development_lamj:'"//test.manager.sincebest.com/lamj"',
    development_bigwinner:'"//test.manager.sincebest.com/hlqp"',
    production_bigwinner:'"//oms.jshubeiqp.sincebest.com/jshubeiqp/manager-web"',
    development_bigwinner_app:'"//test.app.bigwinner.sincebest.com/hlqp"',
    production_bigwinner_app:'"//oms.app.bigwinner.sincebest.com/bigwinner/manager-web"',
    production_slddz:'"//oms.slddz.sincebest.com/slddz/manager-web"',
    development_jshb:'"//test.jshubeiqp.sincebest.com/jshb/manager-web"' 
  }[process.env.URL],
  HTMLTITLE:{
    ahqp:'大胡棋牌游戏运营系统3.0',
    development_wbqp:'大胡棋牌游戏运营系统3.0',
    development_lamj: '"六安"',
    development_bigwinner: '大赢家棋牌运营系统3.0',
    production_bigwinner:'大赢家棋牌运营系统3.0',
    development_bigwinner_app: '大赢家棋牌运营系统3.0',
    production_bigwinner_app:'大赢家棋牌运营系统3.0',
    production_slddz:'闪亮斗地主棋牌运营系统3.0',
    development_jshb:'极速湖北棋牌运营系统3.0'
  }[process.env.URL],
}
