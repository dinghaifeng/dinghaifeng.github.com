---
layout: post
title: "What is the code quality at Google like"
description: ""
category: 
tags: []
---
{% include JB/setup %}

来自Quora问答[Google的代码质量如何](http://www.quora.com/What-is-the-code-quality-at-Google-like)中，Google在代码质量方面的文化：

* 代码审查。在提交任何代码之前，必须要得到代码owner的审核和确认。鼓励审核者对未经深思熟虑的代码提出大规模修改的意见，而非无关紧要的小修小补；
* 与代码风格指南(coding sytle guide)保持一致；
* 整个团队都能够致力于提升code base的质量、维护核心library、构造更好的工具；
* 活跃的代码健康(code health)讨论组；
* 倾向于做正确的事情，而非迫于来自外部的项目deadline压力而用hack的方式修改代码；
* Fixit活动。举个例子，一位工程师可以说，”我们不应该继续使用废弃的`CruftMap`类了。我计划在1月20日组织一次Fixit活动。“当1月20日到来时，所有人都会停下手头的工作把自己代码中的`CruftMap`类替换掉。OK，从1月21日开始，整个Google的code base都不再依赖`CruftMap`类了。核心Library的代码变得越来越好，Fixit活动也在逐渐变少。


我的补充：

* 首先需要意识到**代码不仅是资产，更是负债**。用尽可能少的代码解决问题；如果能通过精简已有代码解决问题，那更好不过。换句话说，需要有人持续为code base做减法；
* 代码洁癖不可取，但对核心的抽象和接口的洁癖必须要坚持。让最好的、最有经验的人来设计接口，并involve相关者充分讨论；
* 在代码质量和项目进展之间需要trade-off. 技术负责人需要能够做出判断，在必要的时候为了快速迭代而背负一些技术债务，并在合适的时间偿还技术债务；
