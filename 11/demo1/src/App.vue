<template>
    <div id="app">
        <List :list="list" />
    </div>
</template>

<script>
import List from "@/components/List";
export default {
    data() {
        return {
            list: [
                {
                    name: "白娜1",
                    children: [
                        {
                            name: "白娜1-1",
                            children: [
                                {
                                    name: "白娜1-1-1",
                                    children: [
                                        {
                                            name: "白娜1-1-1-1"
                                        }
                                    ]
                                },
                                {
                                    name: "白娜1-1-2"
                                }
                            ]
                        },
                        {
                            name: "白娜1-2",
                            children: [
                                {
                                    name: "白娜1-2-1"
                                },
                                {
                                    name: "白娜1-2-2"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "白娜2",
                    children: [
                        {
                            name: "白娜2-1",
                            children: [
                                {
                                    name: "白娜2-1-1"
                                },
                                {
                                    name: "白娜2-1-2"
                                }
                            ]
                        },
                        {
                            name: "白娜2-2",
                            children: [
                                {
                                    name: "白娜2-2-1"
                                },
                                {
                                    name: "白娜2-2-2"
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    },
    components: {
        List
    }
};
</script>

<style>
</style>
