import React from 'react';

// config
// import { name } from '@config';
import _config from '@config/index';
const { name } = _config;

// components
import Shell from '@modules/shell';
import Meta from '@modules/meta';

import SingleColumns from '../../layout/single-columns';

// styles
import './style.scss';

export default Shell(function() {
  return (
    <SingleColumns>

    <div styleName="container" className="card">
    <Meta title={'用户协议'} />

    <h1>用户协议</h1>

    生效日期：2017 年 02 月 17日<br /><br />

    <div>
      请您仔细阅读以下条款，如果您对本协议的任何条款表示异议，您可以选择不进入{name}。当您注册成功，无论是进入{name}，还是在知{name}上发布任何内容，或者是直接或通过各类方式（如站外API引用等）间接使用{name}网服务和数据的行为，都将被视作已无条件接受本声明所涉全部内容。
      <br />
      若您对本声明的任何条款有异议，请停止使用{name}网所提供的全部服务。
      <br /><br />
      <h2>使用规则</h2>
      <br />
      1、用户注册成功后，{name}将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户负责保管；用户应当对以其用户帐号进行的所有活动和事件负法律责任。
      <br />
      2、用户须对在{name}的注册信息的真实性、合法性、有效性承担全部责任，用户不得冒充他人；不得利用他人的名义发布任何信息；不得恶意使用注册帐号导致其他用户误认； 任何机构或个人注册和使用的互联网用户账号名称，不得有下列情形：<br />
      （一）违反宪法或法律法规规定的；<br />
      （二）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；<br />
      （三）损害国家荣誉和利益的，损害公共利益的；<br />
      （四）煽动民族仇恨、民族歧视，破坏民族团结的；<br />
      （五）破坏国家宗教政策，宣扬邪教和封建迷信的；<br />
      （六）散布谣言，扰乱社会秩序，破坏社会稳定的；<br />
      （七）散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；<br />
      （八）侮辱或者诽谤他人，侵害他人合法权益的；<br />
      （九）含有法律、行政法规禁止的其他内容的。<br />
      <br />
      <h2>关于用户名的管理</h2>
      <br />
      请勿以党和国家领导人或其他名人的真实姓名、字、号、艺名、笔名、头衔等注册和使用昵 称（如确为本人，需要提交相关证据并通过审核方可允许使用）；
      <br />
      请勿以国家组织机构或其他组织机构的名称等注册和使用昵称（如确为该机构，需要提交相关证据并通过审核方可允许使用）；
      <br />
      请勿注册和使用与其他网友相同、相仿的名字或昵称；
      <br />
      请勿注册和使用不文明、不健康的ID和昵称；
      <br />
      请勿注册和使用易产生歧义、引起他人误解或带有各种奇形怪状符号的ID和昵称。
      <br />
      用户以虚假信息骗取账号名称注册，或账号头像、简介等注册信息存在违法和不良信息的，{name}将暂停或注销。
      <br />
      用户连续一年没有在{name}上更新动态，{name}有权收回该用户昵称。
      <br />
      3、{name}是一个信息分享及传播的平台。用户通过{name}发表的信息为公开的信息，其他第三方均可以通过{name}获取用户发表的信息，用户对任何信息的发表即认可该信息为公开的信息，并单独对此行为承担法律责任；任何用户不愿被其他第三人获知的信息都不应该在{name}上进行发表。
      <br />
      4、用户承诺不得以任何方式利用{name}直接或间接从事违反中国法律、以及社会公德的行为，{name}有权对违反上述承诺的内容予以删除。
      <br />
      5、{name}用户不得利用{name}服务制作、上载、复制、发布、传播或者转载如下内容：
      <br />
      · 反对宪法所确定的基本原则的；
      <br />
      · 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；
      <br />
      · 损害国家荣誉和利益的；
      <br />
      · 煽动民族仇恨、民族歧视，破坏民族团结的；
      <br />
      · 破坏国家宗教政策，宣扬邪教和封建迷信的；
      <br />
      · 散布谣言，扰乱社会秩序，破坏社会稳定的；
      <br />
      · 散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；
      <br />
      · 侮辱或者诽谤他人，侵害他人合法权益的；
      <br />
      · 含有法律、行政法规禁止的其他内容的信息。
      <br />
      6、{name}有权对用户使用{name}的情况进行审查和监督，如用户在使用{name}时违反任何上述规定，{name}或其授权的人有权要求用户改正或直接采取一切必要的措施（包括但不限于更改或删除用户张贴的内容、暂停或终止用户使用{name}的权利）以减轻用户不当行为造成的影响。
      <br /><br />
      {/*
      <h2>知识产权</h2>
      <br />
      {name}是一个信息获取、分享及传播的平台，我们尊重和鼓励{name}用户创作的内容，认识到保护知识产权对{name}生存与发展的重要性，承诺将保护知识产权作为{name}运营的基本原则之一。
      <br />
      1、用户在{name}上发表的全部原创内容，著作权均归用户本人所有。用户可授权第三方以任何方式使用，不需要得到{name}的同意。
      <br />
      2、{name}提供的网络服务中包含的标识、版面设计、排版方式、文本、图片、图形等均受著作权、商标权及其它法律保护，未经相关权利人（含{name}及其他原始权利人）同意，上述内容均不得在任何平台被直接或间接发布、使用、出于发布或使用目的的改写或再发行，或被用于其他任何商业目的。
      <br />
      3、为了促进其创作内容的分享和传播，用户将其在{name}上发表的全部内容，授予{name}免费的、不可撤销的、非独家使用许可，{name}有权将该内容用于{name}各种形态的产品和服务上，包括但不限于网站以及发表的应用或其他互联网产品。
      <br />
      第三方若出于非商业目的，将用户在{name}上发表的内容转载在{name}之外的地方，应当在作品的正文开头的显著位置注明原作者姓名（或原作者在{name}上使用的帐号名称），给出原始链接，注明「发表于{name}」，并不得对作品进行修改演绎。若需要对作品进行修改，或用于商业目的，第三方应当联系用户获得单独授权，按照用户规定的方式使用该内容。
      <br />
      4、{name}为用户提供「保留所有权利，禁止转载」的选项。除非获得原作者的单独授权，并邮件通知{name}（邮箱：help@jianshu.com），任何第三方不得转载标注了「禁止转载」的内容，否则均视为侵权。
      <br />
      5、在{name}上传或发表的内容，用户应保证其为著作权人或已取得合法授权，并且该内容不会侵犯任何第三方的合法权益。如果第三方提出关于著作权的异议，{name}有权根据实际情况删除相关的内容有权追究用户的法律责任，给{name}或任何第三方造成损失的，用户应负责全额赔偿。
      <br />
      6、如果任何第三方侵犯了{name}用户相关的权利，用户同意授权{name}或其指定的代理人代表{name}自身或用户对该第三方提出警告、投诉、发起行政执法、诉讼、进行上诉，或谈判和解，并且用户同意在{name}认为必要的情况下参与共同维权。
      <br />
      7、{name}有权但无义务对用户发布的内容进行审核，有权根据相关证据结合《侵权责任法》、《信息网络传播权保护条例》等法律法规及{name}社区指导原则对侵权信息进行处理。
      <br /><br />
      <h2>个人隐私</h2>
      <br />
      尊重用户个人隐私信息的私有性是{name}的一贯原则，{name}将通过技术手段、强化内部管理等办法充分保护用户的个人隐私信息，除法律或有法律赋予权限的政府部门要求或事先得到用户明确授权等原因外，{name}保证不对外公开或向第三方透露用户个人隐私信息，或用户在使用服务时存储的非公开内容。
      <br />
      同时，为了运营和改善{name}的技术与服务，{name}将可能会自行收集使用或向第三方提供用户的非个人隐私信息，这将有助于{name}向用户提供更好的用户体验和服务质量。
      <br /><br />
      */}
      {/*
      <h2>侵权举报</h2>
      <br />
      1、处理原则
      <br />
      {name}高度重视自由表达和企业正当权利的平衡。依照法律规定删除违法信息是{name}社区的法定义务，{name}社区亦未与任何中介机构合作开展此项业务。
      <br />
      2、受理范围
      <br />
      受理{name}社区内侵犯企业或个人合法权益的侵权举报，包括但不限于涉及个人隐私、造谣与诽谤、商业侵权。
      <br />
      涉及个人隐私：发布内容中直接涉及身份信息，如个人姓名、家庭住址、身份证号码、工作单位、私人电话等详细个人隐私；
      <br />
      造谣、诽谤：发布内容中指名道姓（包括自然人和企业）的直接谩骂、侮辱、虚构中伤、恶意诽谤等；
      <br />
      商业侵权：泄露企业商业机密及其他根据保密协议不能公开讨论的内容。
      <br />
      3、举报条件
      <br />
      如果个人或单位发现{name}上存在侵犯自身合法权益的内容，请与{name}取得联系（邮箱：help@jianshu.com）。为了保证问题能够及时有效地处理，请务必提交真实有效、完整清晰的材料，否则不予受理。请使用以下格式（包括各条款的序号）：
      <br />
      A、权利人对涉嫌侵权内容拥有商标权、著作权和/或其他依法可以行使权利的权属证明；如果举报人非权利人，请举报人提供代表企业进行举报的书面授权证明。
      <br />
      B、充分、明确地描述侵犯了权利人合法权益的内容，提供涉嫌侵权内容在{name}上的具体页面地址，指明涉嫌侵权内容中的哪些内容侵犯了上述列明的权利人的合法权益；
      <br />
      C、权利人具体的联络信息，包括姓名、身份证或护照复印件（对自然人）、单位登记证明复印件（对单位）、通信地址、电话号码、传真和电子邮件；
      <br />
      D、在侵权举报中加入如下关于举报内容真实性的声明：
      <br />
      · 我本人为所举报内容的合法权利人；
      <br />
      · 我举报的发布在{name}社区中的内容侵犯了本人相应的合法权益；
      <br />
      · 如果本侵权举报内容不完全属实，本人将承担由此产生的一切法律责任。
      <br />
      4、处理流程
      <br />
      出于网络社区的监督属性，并非所有申请都必须受理。{name}自收到举报邮件七个工作日内处理完毕并给出回复。处理期间，不提供任何电话、邮件及其他方式的查询服务。
      <br />
      出现{name}已经删除或处理的内容，但是百度、谷歌等搜索引擎依然可以搜索到的现象，是因为百度、谷歌等搜索引擎自带缓存，此类问题{name}无权也无法处理，因此相关申请不予受理。
      <br />
      此为{name}社区唯一的官方的侵权投诉渠道，暂不提供其他方式处理此业务。用户在{name}中的商业行为引发的法律纠纷，由交易双方自行处理，与{name}无关。
      <br />
      服务终止及暂停
      <br />
      任何引起其他用户反感的行为，包括但不限于利用{name}平台发布广告或是垃圾信息，利用简信骚扰其他用户等，网站可随时行使暂停、收回、删除帐号的权利。
      <br /><br />
      */}
      <h2>免责申明</h2>
      <br />
      1、用户在{name}发表的内容仅表明其个人的立场和观点，并不代表{name}的立场或观点。作为内容的发表者，需自行对所发表内容负责，因所发表内容引发的一切纠纷，由该内容的发表者承担全部法律及连带责任。{name}不承担任何法律及连带责任。
      <br />
      2、{name}不保证网络服务一定能满足用户的要求，也不保证网络服务不会中断，对网络服务的及时性、安全性、准确性也都不作保证。
      <br />
      3、对于因不可抗力或{name}不能控制的原因造成的网络服务中断或其它缺陷，{name}不承担任何责任，但将尽力减少因此而给用户造成的损失和影响。
      <br /><br />
      <h2>协议修改</h2>
      <br />
      1、根据互联网的发展和有关法律、法规及规范性文件的变化，或者因业务发展需要，{name}有权对本协议的条款作出修改或变更，一旦本协议的内容发生变动，{name}将会直接在{name}网站上公布修改之后的协议内容，该公布行为视为{name}已经通知用户修改内容。{name}也可采用电子邮件或私信的传送方式，提示用户协议条款的修改、服务变更、或其它重要事项。
      <br />
      2、如果不同意{name}对本协议相关条款所做的修改，用户有权并应当停止使用{name}。如果用户继续使用{name}，则视为用户接受{name}对本协议相关条款所做的修改。
    </div>
    </div>

    </SingleColumns>
  )
})
